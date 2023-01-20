export default function Card(props) {
  const { icon, title } = props;

  return (
    <div className="p-6 m-4 flex flex-col items-center w-auto rounded-xl border border-zoom-dark-blue hover:bg-zoom-dark-blue font-openSans font-bold md:p-4 md:h-20 md:w-48 hover:animate-pulse hover:text-white">
      {icon}
      <p>{title}</p>
    </div>
  );
}
