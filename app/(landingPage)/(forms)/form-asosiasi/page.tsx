"use client";
import { useState, useEffect, ChangeEvent, ChangeEventHandler } from "react";
import CheckboxNine from "@/components/Checkboxes/CheckboxNine";
import CheckboxSix from "@/components/Checkboxes/CheckboxSix";
import CheckboxSeven from "@/components/Checkboxes/CheckboxSeven";
import CheckboxEight from "@/components/Checkboxes/CheckboxEight";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "Form Asosiasi Page | SI UMKM",
  description: "This is Form Asosiasi page ",
  // other metadata
};

interface FormAsosiasiProps {
  id: string; // Define the 'id' prop here
}

const FormAsosiasi: React.FC<FormAsosiasiProps> = ({ id }) => {
  const router = useRouter();
  const [namalengkap_asosiasi, setNamaLengkap_asosiasi] = useState("");
  const [namasingkat_asosiasi, setNamaSingkat_asosiasi] = useState("");
  const [alamat_asosiasi, setAlamat_asosiasi] = useState("");
  const [kodepos_asosiasi, setkodePos_asosiasi] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email_asosiasi, setEmail_asosiasi] = useState("");
  const [nomor_wa_asosiasi, setNomor_wa_asosiasi] = useState("");
  const [website_asosiasi, setWebsite_asosiasi] = useState("");
  const [nama_pimpinan_asosiasi, setNama_pimpinan_asosiasi] = useState("");
  const [tahun_berdiri_asosiasi, setTahun_berdiri_asosiasi] = useState("");
  const [jenis_bidang_asosiasi, setJenis_bidang_asosiasi] = useState("");
  const [jumlah_anggota_umkm, setJumlah_anggota_umkm] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [legalitas_asosiasi, setLegaltas_asosiasi] = useState("");

  const [isCheckedSix, setIsCheckedSix] = useState<boolean>(false);
  const [isCheckedSeven, setIsCheckedSeven] = useState<boolean>(false);
  const [isCheckedEight, setIsCheckedEight] = useState<boolean>(false);
  const [isCheckedNine, setIsCheckedNine] = useState<boolean>(false);

  const handleCheckboSixChange = () => setIsCheckedSix(!isCheckedSix);
  const handleCheckboxSevenChange = () => setIsCheckedSeven(!isCheckedSeven);
  const handleCheckboxEightChange = () => setIsCheckedEight(!isCheckedEight);
  const handleCheckboxNineChange = () => setIsCheckedNine(!isCheckedNine);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageData = e.target.files[0];
      // Validasi apakah file adalah gambar dan memiliki ekstensi yang diizinkan
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.test(imageData.name)) {
        console.error("The image must be a file of type: jpeg, png, jpg, gif.");
        return;
      }
      // Set image state dengan objek File yang benar
      setImage(imageData);
    }
  };

  const storePost = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Membuat objek FormData
    const formData = new FormData();

    let legalitasValues = [];
    if (isCheckedSix) {
      legalitasValues.push("Akte Pendirian");
    }
    if (isCheckedSeven) {
      legalitasValues.push("NPWP");
    }
    if (isCheckedEight) {
      legalitasValues.push("AD/ART");
    }
    if (isCheckedNine) {
      legalitasValues.push("SK Kemenkumham");
    }

    const legalitas_asosiasi = legalitasValues.join(",");

    // Menambahkan data ke FormData
    formData.append("namalengkap_asosiasi", namalengkap_asosiasi);
    formData.append("namasingkat_asosiasi", namasingkat_asosiasi);
    formData.append("alamat_asosiasi", alamat_asosiasi);
    formData.append("kodepos_asosiasi", kodepos_asosiasi);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("email_asosiasi", email_asosiasi);
    formData.append("nomor_wa_asosiasi", nomor_wa_asosiasi);
    formData.append("website_asosiasi", website_asosiasi);
    formData.append("nama_pimpinan_asosiasi", nama_pimpinan_asosiasi);
    formData.append("tahun_berdiri_asosiasi", tahun_berdiri_asosiasi);
    formData.append("jenis_bidang_asosiasi", jenis_bidang_asosiasi);
    formData.append("jumlah_anggota_umkm", jumlah_anggota_umkm);
    formData.append("legalitas_asosiasi", legalitas_asosiasi);

    // Menambahkan data gambar ke FormData
    if (image) {
      formData.append("image", image);
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/asosiasi",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        console.log(response);
        router.push(`/dashboardAsosiasi/${response.data.asosiasi.id}`);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          {/* <!-- UMKM Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Asosiasi Form
              </h3>
            </div>
            <form action="post">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nama Lengkap Asosiasi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Nama Lemgkap Asosiasi"
                      value={namalengkap_asosiasi}
                      onChange={(e) => setNamaLengkap_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nama Singkat Asosiasi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Nama Singkat Asosiasi"
                      value={namasingkat_asosiasi}
                      onChange={(e) => setNamaSingkat_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Alamat Asosiasi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Alamat Asosiasi"
                      value={alamat_asosiasi}
                      onChange={(e) => setAlamat_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Kode Pos Asosiasi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan kode Pos Asosiasi"
                      value={kodepos_asosiasi}
                      onChange={(e) => setkodePos_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Email "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nomer WA Aktif Asosiasi
                    </label>
                    <input
                      type="number"
                      placeholder="Masukkan Nomer WA Aktif Asosiasi"
                      value={nomor_wa_asosiasi}
                      onChange={(e) => setNomor_wa_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Website Asosiasi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Website Asosiasi"
                      value={website_asosiasi}
                      onChange={(e) => setWebsite_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email Asosiasi
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Email Asosiasi"
                    value={email_asosiasi}
                    onChange={(e) => setEmail_asosiasi(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nama Pimpinan
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Nama Pimpinan"
                      value={nama_pimpinan_asosiasi}
                      onChange={(e) =>
                        setNama_pimpinan_asosiasi(e.target.value)
                      }
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Tahun Berdiri Asosiasi
                    </label>
                    <input
                      type="number"
                      placeholder="Masukkan Tahun Berdiri Asosiasi"
                      value={tahun_berdiri_asosiasi}
                      onChange={(e) =>
                        setTahun_berdiri_asosiasi(e.target.value)
                      }
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Jenis Bidang Asosiasi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Jenis Bidang Asosiasi"
                      value={jenis_bidang_asosiasi}
                      onChange={(e) => setJenis_bidang_asosiasi(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Jumlah Anggota UMKM
                    </label>
                    <input
                      type="number"
                      placeholder="Masukkan Jumlah Anggota UMKM"
                      value={jumlah_anggota_umkm}
                      onChange={(e) => setJumlah_anggota_umkm(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label
                    className=" mb-2.5 block text-black dark:text-white"
                    htmlFor="file_input"
                  >
                    Unggah Gambar Asosiasi
                  </label>
                  <input
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="file_input"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-4.5">
                  <label className=" block text-black dark:text-white">
                    Legalitas Usaha
                  </label>
                </div>
                <div className="flex mb-7 gap-7">
                  {/* <CheckboxOne /> */}
                  <div>
                    <label
                      htmlFor="checkboxLabelOne"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelOne"
                          className="sr-only"
                          value={legalitas_asosiasi}
                          onChange={handleCheckboSixChange}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isCheckedSix &&
                            "border-primary bg-gray dark:bg-transparent"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                              isCheckedSix && "bg-primary"
                            }`}
                          ></span>
                        </div>
                      </div>
                      Akte Pendirian
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="checkboxLabelTwo"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelTwo"
                          className="sr-only"
                          onChange={handleCheckboxSevenChange}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isCheckedSeven &&
                            "border-primary bg-gray dark:bg-transparent"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                              isCheckedSeven && "bg-primary"
                            }`}
                          ></span>
                        </div>
                      </div>
                      NPWP / Nomor Pokok Wajib Pajak
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="checkboxLabelThree"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelThree"
                          className="sr-only"
                          onChange={handleCheckboxEightChange}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isCheckedEight &&
                            "border-primary bg-gray dark:bg-transparent"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                              isCheckedEight && "bg-primary"
                            }`}
                          ></span>
                        </div>
                      </div>
                      AD/ART
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="checkboxLabelFour"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabelFour"
                          className="sr-only"
                          onChange={handleCheckboxNineChange}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isCheckedNine &&
                            "border-primary bg-gray dark:bg-transparent"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                              isCheckedNine && "bg-primary"
                            }`}
                          ></span>
                        </div>
                      </div>
                      SK Kemenkumham
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  onClick={storePost}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAsosiasi;
