export async function getGoFishin(
  setFishCardDown: React.Dispatch<React.SetStateAction<boolean>>,
  setGoFishinCardInfo: React.Dispatch<React.SetStateAction<any>>
) {
  try {
    const response = await fetch("http://localhost:5000/api/v1/fish/gofishin");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // setFishCardDown(false);
    console.log(data);

    setGoFishinCardInfo((prevInfo: any) => ({
      ...prevInfo,
      fish_name: data.fish_name,
      fish_length_cms: data.fish_length_cms,
      fish_weight_kgs: data.fish_weight_kgs,
    }));
  } catch (err) {
    console.error(err);
  }
}
