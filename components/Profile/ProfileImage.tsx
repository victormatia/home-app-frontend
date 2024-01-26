"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const ProfileImage: React.FC = () => {
const { user, isLoading } = useUser();
  return (
      <div>
      {user && (
        <Image
                  src={user.picture as string}
                  alt="Profile"
                  className="nav-user-profile rounded-full border-4 border-[#F5F5F5] ml-[30px] mt-[-50px]"
                  width={98}
                  height={98}
                  data-testid="navbar-picture-mobile"
                />
        )}
      </div>
)
}

export default ProfileImage;