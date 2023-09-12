import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("delFlag", 0);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  //https://jqeypqtmrfhfuxnwrqng.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    throw new Error(`Cabin could not be created`);
  }

  // upload a image

  // const avatarFile = event.target.files[0]
  // const { data, error } = await supabase
  //   .storage
  //   .from('avatars')
  //   .upload('public/avatar1.png', avatarFile, {
  //     cacheControl: '3600',
  //     upsert: false
  //   })

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
