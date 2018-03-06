const increaseServiceQuantity = (arr, item) => {
  const index = arr.indexOf(item);
  return [
    ...arr.slice(0, index),
    { ...item, quantity: item.quantity + 1 },
    ...arr.slice(index + 1)
  ];
};

const addService = (arr, item) => {
  return [...arr, { ...item, quantity: 1 }];
};

const decreaseServiceQuantity = (arr, item) => {
  const index = arr.indexOf(item);
  return [
    ...arr.slice(0, index),
    { ...item, quantity: item.quantity - 1 },
    ...arr.slice(index + 1)
  ];
};

const removeService = (arr, item) => {
  const index = arr.indexOf(item);
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const addToCart = (state, newService) => {
  const existedService = state.services.find(
    service => service.id === newService.id
  );
  const updatedServices = existedService
    ? increaseServiceQuantity(state.services, existedService)
    : addService(state.services, newService);
  const totalPrice = state.totalPrice + newService.price;
  return {
    ...state,
    totalPrice,
    services: updatedServices,
    hasItems: true
  };
};

export const removeFromCart = (state, itemId) => {
  const item = state.services.find(service => service.id === itemId);
  const updatedServices = item
    ? item.quantity > 1
      ? decreaseServiceQuantity(state.services, item)
      : removeService(state.services, item)
    : [...state.services];
  const totalPrice = item ? state.totalPrice - item.price : state.totalPrice;
  const hasItems = updatedServices.length > 0 ? true : false;
  return {
    ...state,
    totalPrice,
    hasItems,
    services: updatedServices
  };
};
