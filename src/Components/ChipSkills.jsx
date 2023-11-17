import { Chip } from "@material-tailwind/react";
 
export function ChipSkills() {
  return (
    <div className="flex gap-2">
      <Chip variant="outlined" value="Figma" className="rounded-full font-medium normal-case" />
      <Chip variant="outlined" value="Adobe Photoshop" className="rounded-full font-medium normal-case" />
      <Chip variant="outlined" value="Adobe Illustrator" className="rounded-full font-medium normal-case" />
      <Chip variant="outlined" value="Canva" className="rounded-full font-medium normal-case" />
    </div>
  );
}