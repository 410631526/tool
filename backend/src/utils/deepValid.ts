/**
 * 深層比對兩個物件的指定 key 是否相同
 * 
 * @param v1 物件 1
 * @param v2 物件 2
 * @param keys 欲比對的 key 清單
 * @returns 若所有指定 key 值都相同，回傳 true，否則 false
 */
export const deepValid = <T extends { [name: string]: any }>(
  v1: T, 
  v2: T, 
  keys: Array<string>
): boolean => {
    let isValid = true;
    keys.forEach((key) => {
        if (v1[key] != v2[key]) {
            isValid = false;
        }
    });
    return isValid;
};
