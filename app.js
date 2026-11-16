const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `显示 ${visible} 个项目`;
}));
const projects = {
  automation: ['流程自动化探索', '示例方向：将表单输入、规则校验与任务回传串联起来。先梳理重复步骤，再验证异常处理和人工接管流程。'],
  data: ['数据可视化探索', '示例方向：将业务数据转换为易读的趋势视图。先明确指标定义，再验证数据来源、口径与更新时间。'],
  ai: ['知识应用探索', '示例方向：从文档中提取信息，辅助归纳与检索。保留原文来源，并通过人工核验评估结果的准确性。']
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const [title, description] = projects[button.dataset.project];
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-description').textContent = description;
  dialog.showModal();
}));
dialog.querySelectorAll('.close, .close-action').forEach(button => button.addEventListener('click', () => dialog.close()));
