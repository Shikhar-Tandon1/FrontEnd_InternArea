import React from 'react'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from "react-icons/ri";
import { BsMailbox2Flag } from "react-icons/bs";
import { useTranslation } from 'react-i18next'
function AdminPanel() {
  const { t } = useTranslation();
  return (
    <div>
    


      <div class="hidden w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm lg:block">
      <div class="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
        <div class="grid w-2/3 grid-cols-2 gap-8">
          <Link to="/applications" class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
            <BsMailbox2Flag />
            </div>

            <div>
              <div class="mb-1 font-semibold">{t("View Applications")}</div>
              <p class="text-sm text-gray-500">{t("View All the Applications That you got from applicants")}</p>
            </div>
          </Link>

          <Link to={"/postJob"}  class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
            <i class="bi bi-briefcase"></i>
            </div>

            <div>
              <div class="mb-1 font-semibold">{t("Post Job")}</div>
              <p class="text-sm text-gray-500">{t("Post Jobs According to Your Requirements")}</p>
            </div>
          </Link>

          <Link to={"/postInternship"} class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
            <RiSendPlaneFill />
            </div>
            <div>
              <div class="mb-1 font-semibold">{t("Post Internships")}</div>
              <p class="text-sm text-gray-500">{t("Post Internship According To Your Requirements")} </p>
            </div>
          </Link>

        </div>

  
      </div>
    </div>
  </div>

  )
}

export default AdminPanel