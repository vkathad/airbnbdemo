import { Avatar } from "flowbite-react";

export default function AvatarCom() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
      />
      <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
    </div>
  );
}
