export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

export const hasBatchim = (str) => {
  //strt의 마지막 음절의 유니코드(UTF-16)
  const charCode = str.charCodeAt(str.length - 1);

  if (charCode < 44032 || charCode > 55203) return false;

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;
  return consonantCode !== 0;
};

export const setHeaderActiveMenuIndex = (index) => {
  const x = useState("headerActiveMenuIndex");
  x.value = index;
};

export const getQuestionType = (num, typeIdA = null) => {
  let res = null;
  switch (num) {
    case 0:
      res = "type_id_a";
      break;
    case 1:
      res = typeIdA !== "C" ? "type_id_b" : "city_type";
      break;
    case 2:
      res = typeIdA !== "C" ? "type_id_c" : "type_id_b";
      break;
    case 3:
      res = typeIdA !== "C" ? "is_cost_effective" : "type_id_c";
      break;
    case 4:
      res = typeIdA !== "C" ? "is_walk" : "is_cost_effective";
      break;
    case 5:
      res = typeIdA !== "C" ? "is_soloable" : "is_time_efficient";
      break;
    case 6:
      res = typeIdA !== "C" ? "is_time_efficient" : "is_safe";
      break;
    case 7:
      res = "keyword";
      break;
  }
  return res;
};
