export let paginationData = {
  currentPage: 1, // Исправил опечатку!
  perPage: 10,
};
//управляет, с какой позиции начинать выводить результаты.
export function setCurrentPage(page) {
  paginationData.currentPage = page;
}
//отвечает за размер "выборки" (например, сколько элементов показывать).
export function setLimit(newLimit) {
  paginationData.limit = newLimit;
}
