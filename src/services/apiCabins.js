import supabase from "./supabase";

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
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    throw new Error(`Cabin could not be created`);
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
