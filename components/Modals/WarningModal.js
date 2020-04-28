{
  /* Mobile Cancel button */
}
//       <button
//         type="button"
//         className="bg-white sm:hidden fixed top-2 left-2 ml-2 mt-2 inline-flex items-center justify-center px-4 py-1 border border-gray-200 font-medium rounded-md text-gray-400 focus:bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150 text-xs sm:text-sm sm:leading-5"
//         onClick={() => setWarningModalOpen(true)}
//       >
//         Cancel
//       </button>
//       {/* Modal Backdrop */}
//       <div
//         className={`${
//           warningModalOpen ? "fixed" : "hidden"
//         } z-30 w-full h-full inset-0 bg-black opacity-25 cursor-default`}
//       ></div>
//       {/* Modal warning */}
//       {warningModalOpen && (
//         <div className="absolute z-40 top-32">
//           <div className="bg-white shadow sm:rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 WARNING: Delete this draft
//               </h3>
//               <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
//                 <p>
//                   Once you delete this draft, you'll have to start all over
//                   again.
//                 </p>
//               </div>
//               <div className="mt-5 flex justify-end">
//                 <span className="inline-flex rounded-md shadow-sm">
//                   <button
//                     type="button"
//                     className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
//                     onClick={() => setWarningModalOpen(false)}
//                   >
//                     Go back
//                   </button>
//                 </span>
//                 <span className="ml-3 inline-flex rounded-md shadow-sm">
//                   <button
//                     type="button"
//                     className="py-2 px-4 border inline-flex justify-center border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:border-red-700 transition duration-150 ease-in-out"
//                     onClick={() => {
//                       // delete draft
//                       setWarningModalOpen(false);
//                     }}
//                   >
//                     Delete draft
//                   </button>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
