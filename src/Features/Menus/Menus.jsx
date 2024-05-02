import Image from "next/image";
import Link from "next/link";
import RestaurantMenu from "@/Images/Menus/restaurantMenu.webp";
import CoffeeMenu from "@/Images/Menus/coffeeMenu.webp";
const Menus = () => {
    return ( 
        <section className="container mt-6">
        <div className="w-full max-w-4xl flex-col md:flex-row flex-between gap-8 mx-auto">
          <Link href="/RestaurantMenu">
            <Image
              width={385}
              height={385}
              alt="ghorbani-dev.ir"
              src={RestaurantMenu}
              className="object-fill rounded-lg hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
            />
          </Link>
          <Link href="/CafeMenu">
            <Image
              width={385}
              height={385}
              alt="ghorbani-dev.ir"
              src={CoffeeMenu}
              className="object-fill rounded-lg hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
            />
          </Link>
        </div>
      </section>
     );
}
 
export default Menus;