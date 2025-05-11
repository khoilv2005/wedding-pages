import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#fefdf7] py-5 border-b border-gray-200/80"> {/* Thêm sticky, top-0, z-50 */}
      <div className="container mx-auto flex items-center justify-between px-8"> {/* Tăng padding ngang */}
        {/* Left Navigation */}
        <div className="flex items-center space-x-10"> {/* Tăng khoảng cách giữa các mục */}
          <Link href="/about" className="text-xs uppercase tracking-wider text-[#333333] font-semibold hover:text-[#9a1b1b] transition-colors duration-300">
            ABOUT
          </Link>
          <Link href="/works" className="text-xs uppercase tracking-wider text-[#333333] font-semibold hover:text-[#9a1b1b] transition-colors duration-300">
            OUR WORKS
          </Link>
          <Link href="/services" className="text-xs uppercase tracking-wider text-[#333333] font-semibold hover:text-[#9a1b1b] transition-colors duration-300">
            OUR SERVICES
          </Link>
        </div>

        {/* Center Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex flex-col items-center group text-center">
            {/* Logo Symbol with EST. 2010 */}
            <div className="relative flex items-center justify-center h-9 mb-1.5"> {/* Điều chỉnh chiều cao và lề */}
              <span className="text-[10px] text-gray-500 mr-2 font-medium">EST.</span>
              {/* Bạn cần đảm bảo logo.jpg là biểu tượng màu đỏ như trong hình */}
              {/* Điều chỉnh w-8 h-8 tùy theo kích thước thực tế của logo.jpg */}
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.jpg" // Giả sử đây là biểu tượng hình trái tim/vô cực màu đỏ
                  alt="The Planners Symbol"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-gray-500 ml-2 font-medium">2010</span>
            </div>

            {/* Brand Name - Cân nhắc sử dụng font chữ serif cụ thể nếu có (ví dụ: Playfair Display) */}
            <h1 className="font-serif text-3xl tracking-wider text-[#2c2c2c] group-hover:text-[#9a1b1b] transition-colors duration-300">
              THE PLANNERS
            </h1>
            {/* Tagline */}
            <p className="text-[9px] text-gray-500 tracking-[0.2em] uppercase mt-1 font-medium">
              Premium Event Design and Consultancy
            </p>
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-10"> {/* Tăng khoảng cách, căn giữa các mục */}
          <Link href="/press" className="text-xs uppercase tracking-wider text-[#333333] font-semibold hover:text-[#9a1b1b] transition-colors duration-300">
            PRESS & PRAISE
          </Link>
          <Link href="/blog" className="text-xs uppercase tracking-wider text-[#333333] font-semibold hover:text-[#9a1b1b] transition-colors duration-300">
            BLOG
          </Link>
          <Link href="/contact" className="text-xs uppercase tracking-wider text-[#333333] font-semibold hover:text-[#9a1b1b] transition-colors duration-300">
            CONTACT
          </Link>
          {/* Language Switcher */}
          <button className="bg-black text-white px-3.5 py-1.5 flex items-center space-x-1.5 text-[11px] uppercase font-semibold hover:bg-opacity-80 transition-colors duration-300">
            <span>EN</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;