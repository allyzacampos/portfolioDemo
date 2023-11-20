import { Chip } from "@material-tailwind/react";
import { devTools } from '../Utils/Data';

export function ChipLanguage() {
  return (
    <div className="flex flex-wrap gap-2">
      {devTools.map((item, index) => (
        <div key={index}>
          <Chip variant="ghost" size="lg" value={item.tool} className="rounded-full font-[16px] normal-case text-black-dark border-2 " color="orange"/>
        </div>
      ))}
    </div>
  );
}
