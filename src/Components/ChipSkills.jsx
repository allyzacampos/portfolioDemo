import { Chip } from "@material-tailwind/react";
import { designTools } from '../Utils/Data';

export function ChipSkills() {
  return (
    <div className="flex flex-wrap gap-2">
      {designTools.map((tools, index) => (
        <div key={index}>
          <Chip variant="ghost" size="lg" value={tools.value} className="rounded-full font-[16px] normal-case text-black-dark border-2" color="green"/>
        </div>
      ))}
    </div>
  );
}
