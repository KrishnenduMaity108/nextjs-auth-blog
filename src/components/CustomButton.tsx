type CustomButtonProps = {
  label: string;
};

export default function CustomButton({ label }: CustomButtonProps) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
      {label}
    </button>
  );
}