/* eslint-disable node/no-unsupported-features/es-builtins */
const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // getPosition()
  //   .then(posData => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .then(data => {
  //     console.log(data, positionData);
  //   });
  // setTimer(1000).then(data => {
  //   console.log('Timer Done.');
  // });
  // console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);

// Promise.race will run all promises passed immediately, however it will return only whatever promise returns first.
Promise.race([getPosition(), setTimer(2000)]).then(data => {
  console.log(data);
});

// Promise.all runs all promises passed, but will return the results of all successful promises. If any promises fail, we only get back the failure result.
Promise.all([getPosition(), setTimer(2000)]).then(promiseData => {
  console.log(promiseData);
});

// Promise.allSettled runs all promises passed and returns an array of the results of each promise
Promise.allSettled([getPosition(), setTimer(2000)]).then(promiseData => {
  console.log(promiseData);
});
