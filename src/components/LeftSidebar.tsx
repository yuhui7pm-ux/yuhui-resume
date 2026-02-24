const LeftSidebar = () => {
  const skills = [
    { name: 'React18/Vue3', level: 95, category: 'framework' },
    { name: 'TypeScript', level: 90, category: 'language' },
    { name: 'Pixi.js/Canvas', level: 85, category: 'graphics' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'React Native', level: 75, category: 'mobile' },
  ]

  const achievements = [
    { icon: 'i-mdi-sitemap', text: '前端架构设计', desc: '2-3年架构经验' },
    { icon: 'i-mdi-trophy', text: '技术团队Leader', desc: '管理10+人团队' },
    { icon: 'i-mdi-rocket', text: '性能优化专家', desc: '提升应用性能5倍' },
    { icon: 'i-mdi-lightbulb', text: '产品创新能力', desc: '草图转建筑设计' },
    { icon: 'i-mdi-chart-line', text: '产品成功案例', desc: '日活4万+用户' },
  ]

  return (
    <div className="w-1/3 space-y-4">
      <section className="transform transition-all duration-300 hover:translate-x-2">
        <h2 className="text-lg font-bold mb-3 text-gray-800 border-b-2 border-purple-200 pb-1.5 flex items-center">
          <i className="i-mdi-account-details mr-2 text-lg text-purple-600"></i>核心优势
        </h2>
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-2 group hover:bg-purple-50 p-2 rounded-lg transition-all"
            >
              <i
                className={`${achievement.icon} text-lg text-purple-600 group-hover:scale-110 transition-transform mt-0.5`}
              ></i>
              <div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition-colors block">
                  {achievement.text}
                </span>
                <span className="text-xs text-gray-600">{achievement.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="transform transition-all duration-300 hover:translate-x-2">
        <h2 className="text-lg font-bold mb-3 text-gray-800 border-b-2 border-purple-200 pb-1.5 flex items-center">
          <i className="i-mdi-account-details mr-2 text-lg text-purple-600"></i>基本信息
        </h2>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 group hover:bg-purple-50 p-1.5 rounded-lg transition-all">
            <i className="i-mdi-clock text-base text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-sm text-gray-700">
              <span className="font-medium text-purple-600">5年+</span> 前端开发经验
            </span>
          </div>
          <div className="flex items-center gap-2 group hover:bg-purple-50 p-1.5 rounded-lg transition-all">
            <i className="i-mdi-school text-base text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-sm text-gray-700">汕头大学 · 本科</span>
          </div>
          <div className="flex items-center gap-2 group hover:bg-purple-50 p-1.5 rounded-lg transition-all">
            <i className="i-mdi-map-marker text-base text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-sm text-gray-700">深圳 · 可远程</span>
          </div>
          <div className="flex items-center gap-2 group hover:bg-purple-50 p-1.5 rounded-lg transition-all">
            <i className="i-mdi-currency-cny text-base text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-sm text-gray-700">期望薪资：35K+</span>
          </div>
        </div>
      </section>

      <section className="transform transition-all duration-300 hover:translate-x-2">
        <h2 className="text-lg font-bold mb-3 text-gray-800 border-b-2 border-purple-200 pb-1.5 flex items-center">
          <i className="i-mdi-tools mr-2 text-lg text-purple-600"></i>技术栈
        </h2>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1.5 group">
              <div className="flex justify-between">
                <span className="text-sm text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-purple-600 font-bold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 group-hover:from-purple-600 group-hover:to-indigo-600"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LeftSidebar
