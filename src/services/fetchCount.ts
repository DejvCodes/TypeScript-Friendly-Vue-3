interface FetchCountCallback {
  (count: number): void
}

const fetchCount = (cb: FetchCountCallback) => {
  cb(0)
}

export default fetchCount