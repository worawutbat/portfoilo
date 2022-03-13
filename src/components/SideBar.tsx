import {
  faSearch,
  //   faBars,
  //   faAnchor,
  //   faCircleUser,
  //   faEnvelope,
  //   faMessage,
  //   faLocationDot,
  //   faUser,
  //   faMoon,
  //   faSun,
  //   faCity,
  //   faAddressCard,
  //   faAddressBook,
  //   faBriefcase,
  //   faCakeCandles,
  //   faPhone,
  //   faGraduationCap,
  //   faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const SideBar = () => {
  return (
    <div>
      <div style={{ width: 40 }}>
        <Image src="/favicon/android-chrome-192x192.png" layout="responsive" width={30} height={30} alt="Picture of the author" />
      </div>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SideBar;
