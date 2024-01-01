import Image from "next/image";

import { iProfile } from "@/services/data";

export const ProfileCard = (props: iProfile) => {
  const { name, email, username, role, photo } = props;

  return (
    <div className="profile__card rounded-[15px] border border-solid">
      <Image
        src={photo}
        alt={username}
        className="h-[200px] rounded-t-[15px]"
        height={1000}
        width={400}
      />
      <div className="bg-slate-300 p-3">
        <h2 className="">Name: {name}</h2>
        <p>Role: {role}</p>
        <p>Email: {email}</p>
        <p>Follow: @{username}</p>
      </div>
    </div>
  );
};
