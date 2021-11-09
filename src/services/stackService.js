export const getAllMyAnswers = async (limit) => {
  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/users/6144031/answers?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&pagesize=${limit}&order=desc&sort=votes&filter=!3upZ1Q4RAmV-8qY34`
    );

    const data = await res.json();

    return data;
  } catch(err) {
    console.log(err);
  }
};

export const getAllMyComments = async (limit) => {
  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/users/6144031/comments?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&pagesize=${limit}&order=desc&sort=creation&filter=!3upZ1Q4RAmV-8qY34`
    );

    const data = await res.json();

    return data;
  } catch(err) {
    console.log(err);
  }
};
