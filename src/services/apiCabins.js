import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("delFlag", 0)
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://jqeypqtmrfhfuxnwrqng.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg
  console.log("newCabin", newCabin, "id", id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log("hasImagePath", hasImagePath);
  const imageName = `${Math.floor(Math.random() * 9000) + 1000}-${
    newCabin.image.name
  }`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1、create/edit cabin
  let query = supabase.from("cabins");

  // A) create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // B) edit
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select().single();

  if (error) {
    throw new Error(
      `Cabin could not be ${Boolean(id) ? "updated" : "created"}`
    );
  }

  // 2、upload a image
  if (hasImagePath) {
    return data;
  }
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3、delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase
      .from("cabins")
      .update({ delFlag: "1" })
      .eq("id", data.id)
      .select();

    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}

export async function deleteCabin(cabinId) {
  const { data, error } = await supabase
    .from("cabins")
    .update({ delFlag: "1" })
    .eq("id", cabinId)
    .select();
  if (error) {
    throw new Error(`Cabin could not be deleted`);
  }
  return data;
}
