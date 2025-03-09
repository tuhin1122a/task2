import Link from "next/link";

export default function CategoryCard({
  icon,
  title,
  courses,
  bgColor,
  textColor,
}) {
  return (
    <Link
      href="#"
      className={`${bgColor} p-6 rounded-xl hover:shadow-lg transition-shadow`}
    >
      <div className="flex items-center space-x-4">
        <div className={`${textColor}`}>{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{courses}</p>
        </div>
      </div>
    </Link>
  );
}
