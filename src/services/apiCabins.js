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

export async function deleteCabin(cabinId) {
  console.log("cabinId", cabinId);

  const { data, error } = await supabase
    .from("cabin")
    .update({ delFlag: "1" })
    .eq("id", cabinId)
    .select();
  console.log("deleteCabin-data", data);

  if (error) {
    console.error(error);
    console.error("deleteCabin-error", error);

    throw new Error(`Cabin id is [${cabinId}] could not be deleted`);
  }
  return data;
}
