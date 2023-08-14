import { GymEquipments } from '@/types/user.type';

interface WaitEquipmentListProps {
  equipmentLists: GymEquipments[];
  handlePickEquipment: (equipment: GymEquipments) => void;
  equiptment: GymEquipments | null;
  onClose: () => void;
}

const WaitEquipmentList = ({
  equipmentLists,
  handlePickEquipment,
  equiptment,
  onClose,
}: WaitEquipmentListProps) => {
  return (
    <div className="w-[340px] bg-slate-200 rounded-lg py-4 px-2">
      <div className="w-[320px] h-12 text-center flex justify-center items-center border-b-2 border-black align-middle">
        <span className="w-[120px] mx-auto text-xl">기구 목록</span>
        <button
          className="bg-CustomNavy w-8 h-8 p-0 text-white float-right"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly w-[320px] h-[500px] overflow-y-auto">
        {equipmentLists.map((item: GymEquipments) => {
          if (equiptment?.name !== item.name)
            return (
              <EquipmentButton
                key={item.reader}
                handlePickEquipment={() => handlePickEquipment(item)}
                equipment={item}
              />
            );
        })}
      </div>
    </div>
  );
};

interface EquipmentButtonProps {
  equipment: GymEquipments;
  handlePickEquipment: (equipment: GymEquipments) => void;
}

const EquipmentButton = ({
  equipment,
  handlePickEquipment,
}: EquipmentButtonProps) => {
  const name = isNaN(parseInt(equipment.name[equipment.name.length - 1]))
    ? equipment.name
    : equipment.name.slice(0, equipment.name.length - 1);
  return (
    <div
      onClick={() => handlePickEquipment(equipment)}
      className="flex flex-col justify-center items-center"
    >
      <div className="bg-white w-[76px] h-[76px] m-3 rounded-full flex justify-center items-center">
        <img src={`/img/equipments/${name}.png`} alt={name} width={52} />
      </div>
      <span>{equipment.name}</span>
    </div>
  );
};

export default WaitEquipmentList;
