import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import { role,studentsData } from '@/lib/data';
import Image from 'next/image';
import React from 'react'
import Link from "next/link";

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
  };
const columns=[
    {
        header:"Info", 
        accessor:"info"
    },
    {
        header:"Teacher ID", 
        accessor:"teacherId", 
        className: "hidden md:table-cell"
    },
    {
        header:"Subjects", 
        accessor:"subjects", 
        className: "hidden md:table-cell"
    },
    {
        header:"Classes", 
        accessor:"classes", 
        className: "hidden md:table-cell"
    },
    {
        header:"Phone", 
        accessor:"phone", 
        className: "hidden lg:table-cell"
    },
    {
        header:"Address", 
        accessor:"address", 
        className: "hidden lg:table-cell"
    },
    {
        header:"Actions",
        accessor: "actions",
    }
];


const StudentList = () => { 

    const renderRow = (item:Teacher) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm
         hover:bg-lamaPurpleLight 
          dark:bg-stone-800 dark:even:bg-stone-900 dark:hover:bg-gray-700
          dark:border-slate-600">
            <td className="flex items-center gap-4 p-4">                
                <Image 
                src={item.photo} 
                alt="" 
                width={40} 
                height={40} 
                className="hidden xl:block w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
            <td className="hidden md:table-cell">{item.classes.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky dark:bg-sky-300">
              <Image src="/eye.png" alt="" width={16} height={16} className='dark:bg-sky-300' />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple dark:bg-purple-300">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
        </tr>
    )



  return (
    <div className='bg-white dark:bg-stone-800 p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
            <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
            <div className='flex flex-col md:flex-row items-cener gap-4 w-full md:w-auto'>
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
                <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-lamaYellowLight bg-lamaYellow" >
                    <Image src='/filter.png' alt="filter button" width={14} height={14} />
                </button>                
                <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-lamaYellowLight bg-lamaYellow" >
                    <Image src='/sort.png' alt="filter button" width={14} height={14} />
                </button>                
                {role==='admin' && <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-lamaYellowLight bg-lamaYellow" >
                    <Image src='/plus.png' alt="filter button" width={14} height={14} />
                </button>}
            </div>
            </div>
        </div>
        {/* LIST */}
        <div className=''>
            <Table columns={columns} renderRow={renderRow} data={studentsData} />
        </div>
        {/* PAGINATION */}
        <Pagination />
    
    </div>
  )
}

export default StudentList