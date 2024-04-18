import ProfileUmkm from "@/components/Umkm/ProfileUmkm";

export async function generateStaticParams() {
  try {
    const res = await fetch("http://localhost:8000/api/pemilik");
    const data = await res.json();

    // Pastikan bahwa properti yang diharapkan adalah umkms
    if (data && Array.isArray(data.umkms)) {
      return data.umkms.map((umkm: any) => ({
        id: umkm.id.toString(),
      }));
    } else {
      throw new Error("Data structure does not match expected format.");
    }
  } catch (error) {
    console.error("Error fetching static params:", error);
    return [];
  }
}

async function getFormUmkm(id: any) {
  try {
    const res = await fetch(`http://localhost:8000/api/pemilik/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching FormUmkm:", error);
    return null;
  }
}

export default async function FormUmkm({ params }: { params: any }) {
  try {
    const formUmkmData = await getFormUmkm(params.id);

    // Pastikan formUmkmData berisi semua properti yang diperlukan oleh ProfileUmkm
    if (formUmkmData) {
      return <ProfileUmkm {...formUmkmData} />;
    } else {
      throw new Error("Data formUmkmData tidak tersedia.");
    }
  } catch (error) {
    console.error("Error in FormUmkm component:", error);
    return <h1>Error</h1>;
  }
}
