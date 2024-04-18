import Image from "next/image";
import React from "react";

interface FormUmkmData {
  id: number;
  nama_usaha: string;
  alamat_usaha: string;
  domisili_usaha: string;
  kodePos_usaha: string;
  email_usaha: string;
  tahunBerdiri_usaha: string;
  jenisbadan_usaha: string;
  kategori_usaha: string;
  image: string;
  deskripsi_usaha: string;
  legalitas_usaha: string;
  pemilik_umkm: any;
}

const ProfileUmkm: React.FC<FormUmkmData> = ({
  id,
  nama_usaha,
  alamat_usaha,
  domisili_usaha,
  kodePos_usaha,
  email_usaha,
  tahunBerdiri_usaha,
  jenisbadan_usaha,
  kategori_usaha,
  image,
  deskripsi_usaha,
  legalitas_usaha,
  pemilik_umkm,
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Profile UMKM
            </h3>
          </div>
          <div className="p-6.5">
            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden">
              <Image src={image} alt="Gambar Usaha" width={100} height={100} />
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nama Pemilik :{" "}
                  {pemilik_umkm
                    ? pemilik_umkm.nama_pemilik
                    : "Nama Pemilik Tidak Tersedia"}
                </label>
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nomer Hp Aktif Pemilik :{" "}
                  {pemilik_umkm
                    ? pemilik_umkm.nomer_pemilik
                    : "Nomor Pemilik Tidak Tersedia"}
                </label>
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Alamat Pemilik :{" "}
                  {pemilik_umkm
                    ? pemilik_umkm.alamat_pemilik
                    : "Alamat Pemilik Tidak Tersedia"}
                </label>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nama Usaha :{" "}
                  {nama_usaha ? nama_usaha : "Nama Usaha Tidak Tersedia"}
                </label>
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Alamat Usaha :{" "}
                  {alamat_usaha ? alamat_usaha : "Alamat Usaha Tidak Tersedia"}
                </label>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Domisili Usaha :{" "}
                  {domisili_usaha
                    ? domisili_usaha
                    : "Domisili Usaha Tidak Tersedia"}
                </label>
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Kode Pos Usaha :{" "}
                  {kodePos_usaha
                    ? kodePos_usaha
                    : "Kode Pos Usaha Tidak Tersedia"}
                </label>
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email Usaha :{" "}
                  {email_usaha ? email_usaha : "Email Usaha Tidak Tersedia"}
                </label>
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Tahun Berdiri Usaha :{" "}
                  {tahunBerdiri_usaha
                    ? tahunBerdiri_usaha
                    : "Tahun Berdiri Usaha Tidak Tersedia"}
                </label>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Jenis Badan Usaha :{" "}
                  {jenisbadan_usaha
                    ? jenisbadan_usaha
                    : "Jenis Badan Usaha Tidak Tersedia"}
                </label>
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Kategori Usaha :{" "}
                  {kategori_usaha
                    ? kategori_usaha
                    : "Kategori Usaha Tidak Tersedia"}
                </label>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Deskripsi Usaha :{" "}
                  {deskripsi_usaha
                    ? deskripsi_usaha
                    : "Deskripsi Usaha Tidak Tersedia"}
                </label>
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Legalitas Usaha :{" "}
                  {legalitas_usaha
                    ? legalitas_usaha
                    : "Legalitas Usaha Tidak Tersedia"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUmkm;
