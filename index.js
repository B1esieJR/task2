// Функция для расчёта расстояния по упрощённой формуле
function calculateDistance(positionLat, positionLong, addressLat, addressLong) {
    // Разница координат
    const latDiff = addressLat - positionLat;
    const lonDiff = addressLong - positionLong;

    // Коэффициент перевода градусов в километры (приблизительно)
    // 1 градус ≈ 111 км на экваторе
    const kmPerDegree = 111;

    // Теорема Пифагора для расчёта расстояния
    const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff) * kmPerDegree;

    return distance;
}

// ПРИМЕРЫ КОРРЕКТНОГО ИСПОЛЬЗОВАНИЯ:

// Пример 1 - передача чисел напрямую
const distance1 = calculateDistance(10, 10, 13, 13);
console.log(`Расстояние от (10, 10) до (13, 13): ${distance1.toFixed(2)} км`);

// Пример 2 - с явным объявлением переменных
const positionLat = 55.751244;  // Москва
const positionLong = 37.618423;
const addressLat = 59.934280;   // Санкт-Петербург
const addressLong = 30.335099;

const distance2 = calculateDistance(positionLat, positionLong, addressLat, addressLong);
console.log(`Расстояние от Москвы до Санкт-Петербурга: ${distance2.toFixed(2)} км`);

// Пример 3 - другой набор координат
console.log(`Расстояние от (5, 5) до (10, 10): ${calculateDistance(5, 5, 10, 10).toFixed(2)} км`);
console.log(`Расстояние от (0, 0) до (0, 10): ${calculateDistance(0, 0, 0, 10).toFixed(2)} км`);