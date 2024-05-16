import AppLayout from "@/layouts/app-layout";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";

const ProfilePage = () => {
  return (
    <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
      <div className="pt-[60px] grid grid-cols-3 gap-x-[64px]">
        <div className="col-span-1 space-y-[24px]">
          <div className="flex items-center gap-x-[24px]">
            <img src="/images/hana.png" className="w-[60px] h-[60px]" />
            <div>
              <h1 className="text-lg font-medium">Hana Mardini</h1>
              <p className="text-sm">Perempuan</p>
            </div>
          </div>
          <div className="border rounded-[20px] p-5 space-y-5">
            <div className=" cursor-pointer flex rounded-[10px] items-center justify-between border py-2 px-4 ">
              <div className="gap-x-2 flex items-center">
                <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
                  <FaRegUser className="w-6 h-6 flex-shrink-0" />
                </div>
                <h1>Profil Saya</h1>
              </div>
              <FaChevronRight className="w-6 h-6" />
            </div>
            <div className="flex cursor-pointer items-center justify-between rounded-[10px] border py-2 px-4 ">
              <div className="gap-x-2 flex items-center">
                <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
                  <FaRegUser className="w-6 h-6 flex-shrink-0" />
                </div>
                <h1>Pengaduan Saya</h1>
              </div>
              <FaChevronRight className="w-6 h-6" />
            </div>
            <div className="flex rounded-[10px] cursor-pointer items-center justify-between border py-2 px-4 ">
              <div className="gap-x-2 flex items-center">
                <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
                  <TbLogout2 className="w-6 h-6 flex-shrink-0" />
                </div>
                <h1>Keluar</h1>
              </div>
              <FaChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="col-span-2 border rounded-[20px] ">
          <h1>Profile Saya</h1>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
