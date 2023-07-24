interface MemberitemProps {
  name: string;
  userid: string;
  number: string;
  sex: string;
  date: number;
  tag: string | null;
}

export const MemberItem = (item: MemberitemProps) => {
  return (
    <div className="flex justify-evenly items-center h-12 basis-32 text-center">
      <span className="basis-1/6">{item.name}</span>
      <span className="basis-1/6">{item.userid}</span>
      <span className="basis-1/6">{item.number}</span>
      <span className="basis-1/6">{item.sex}</span>
      <span className="basis-1/6">{item.date}</span>
      <span className="basis-1/6">{item.tag}</span>
    </div>
  );
};
