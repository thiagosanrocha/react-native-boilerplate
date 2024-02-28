type Options = {
  hasError: boolean;
};

export function fakeRequest<T>(returnRequest: T, options?: Options) {
  return new Promise<T>((resolve, reject) =>
    setTimeout(() => {
      options?.hasError ? reject() : resolve(returnRequest);
    }, 3000),
  );
}
