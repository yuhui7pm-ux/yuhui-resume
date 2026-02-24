import WatiProjects from './WatiProjects'
import YunjiuyiProjects from './YunjiuyiProjects'
import XiaokuProjects from './XiaokuProjects'
import SangforProjects from './SangforProjects'

const WorkExperience = () => {
  return (
    <div className="flex-1">
      <section>
        <h2 className="text-lg font-bold mb-4 text-gray-800 border-b-2 border-purple-200 pb-1.5 flex items-center">
          <i className="i-mdi-briefcase mr-2 text-lg text-purple-600"></i>工作经验
        </h2>

        {/* WATI */}
        <div className="mb-6 relative pl-5 border-l-2 border-purple-200 company-section">
          <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-0 shadow-lg"></div>
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors">
                WATI
              </h3>
              <span className="text-xs text-purple-600 font-medium px-3 py-0.5 bg-purple-50 rounded-full">
                2024.06 - 至今
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 font-medium">前端负责人 | 前端架构师</p>
          </div>

          <WatiProjects />
        </div>

        {/* 深圳云九易科技有限公司 */}
        <div className="mb-6 relative pl-5 border-l-2 border-purple-200 company-section">
          <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-0 shadow-lg"></div>
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors">
                深圳云九易科技有限公司
              </h3>
              <span className="text-xs text-purple-600 font-medium px-3 py-0.5 bg-purple-50 rounded-full">
                2023.04 - 2024.06
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 font-medium">前端负责人</p>
          </div>

          <YunjiuyiProjects />
        </div>

        {/* 深圳小库科技有限公司 */}
        <div className="mb-6 relative pl-5 border-l-2 border-purple-200 company-section">
          <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-0 shadow-lg"></div>
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors">
                深圳小库科技有限公司
              </h3>
              <span className="text-xs text-purple-600 font-medium px-3 py-0.5 bg-purple-50 rounded-full">
                2021.05 - 2023.03
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 font-medium">高级前端开发工程师</p>
          </div>

          <XiaokuProjects />
        </div>

        {/* 深信服科技股份有限公司 */}
        <div className="relative pl-5 border-l-2 border-purple-200 company-section">
          <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-0 shadow-lg"></div>
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors">
                深信服科技股份有限公司
              </h3>
              <span className="text-xs text-purple-600 font-medium px-3 py-0.5 bg-purple-50 rounded-full">
                2019.12 - 2021.04
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 font-medium">初级前端开发工程师</p>
          </div>

          <SangforProjects />
        </div>
      </section>
    </div>
  )
}

export default WorkExperience
