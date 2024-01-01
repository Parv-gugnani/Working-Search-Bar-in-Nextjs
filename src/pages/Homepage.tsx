"use client";
import { useRouter as useNextRouter } from "next/router";
import { useState, useEffect } from "react";
import { ProfileCard } from "@/components/ProfileCard";
import { SearchInput } from "@/components/SearchInput"; // Update the path
import { data, iProfile } from "@/services/data";

const HomePage = () => {
  const [profileData, setProfileData] = useState<iProfile[]>([]);
  useEffect(() => {
    setProfileData(data);
  }, []);

  const router = useNextRouter();
  const searchQuery = router.query.q as string | null;
  const totalUser = profileData.length;

  return (
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
      <p className="mb-10">
        Showing {totalUser} {totalUser > 1 ? "Users" : "User"}
      </p>

      <SearchInput defaultValue={router.query.q as string | null} />

      <div className="mt-8">
        {totalUser === 0 ? (
          <p>No result returned</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            {profileData.map(
              ({ username, role, name, photo, email }: iProfile) => (
                <div key={username}>
                  <ProfileCard
                    name={name}
                    role={role}
                    photo={photo}
                    email={email}
                    username={username}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
