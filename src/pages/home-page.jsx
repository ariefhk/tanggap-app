import AppLayout from "@/layouts/app-layout";

const HomePage = () => {
  return (
    <AppLayout>
      <section className="relative ">
        <div className="absolute 2xl:h-[480px] bg-color-2 w-full -z-10"></div>
        <img src="/images/hero.svg" className="w-screen mt-[-30px] z-10 max-w-[1564px] mx-auto object-cover" />

        <div className="absolute px-4 md:px-5 z-30 max-w-[1200px]  w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex justify-between items-start">
          <div className="text-white space-y-3 pt-5">
            <h1 className="text-5xl font-bold">TANGGAP</h1>
            <p className="text-xl leading-10">
              Tanggap adalah sarana <br /> pengaduan masyarakat <br /> terhadap suatu masalah.
            </p>
          </div>
          <img src="/images/home-laptop.svg" className="max-w-[360px] max-h-[360px] object-cover" />
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
