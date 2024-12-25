export const Footer = () => {
  return (
    <div className="w-[100%] h-[308px] bg-[#4338CA] text-[#FAFAFA] p-[40px] flex flex-col gap-[24px]">
      <div className="  w-[100%] h-[52px]">
        <div className="flex items-center gap-2">
          <img src="/film.png" alt="film png" className="h-6" />
          <div className="text-base font-semibold">Movie Z</div>
        </div>
        <div className="text-sm">© 2024 Movie Z. All Rights Reserved.</div>
      </div>

      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-sm font-semibold">Contact Information</div>
          <div className="flex items-center gap-4">
            <img src="/email.png" alt="email icon" className="w-4 h-4" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm">support@movieZ.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/phone.png" alt="phone icon" className="w-4 h-4" />
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-sm">+976 (11) 123-4567</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Follow Us</div>
          <a href="#" className="text-sm ">
            Facebook
          </a>
          <a href="#" className="text-sm ">
            Instagram
          </a>
          <a href="#" className="text-sm ">
            Twitter
          </a>
          <a href="#" className="text-sm ">
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};
