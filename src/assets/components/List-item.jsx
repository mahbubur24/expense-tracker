export default function ListItem({
  listData,
  handleEditItem,
  handleDeleteItem,
}) {
  return (
    <>
      {listData.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center py-2 relative group cursor-pointer"
        >
          <div>
            <h3 className="text-base font-medium leading-7 text-gray-600">
              {item.category}
            </h3>
            <p className="text-xs text-gray-600">{item.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
              BDT {item.amount}
            </p>

            <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
              <button
                className="hover:text-teal-600"
                role="button"
                title="Edit Button"
                onClick={() => handleEditItem(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                  <path d="M13.5 6.5l4 4" />
                </svg>
              </button>

              <button
                className="hover:text-red-600"
                role="button"
                title="Delete"
                onClick={() => handleDeleteItem(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
