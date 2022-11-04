export const usePageHeader = (options) => {
  const usePageHeaderStore = usePageHeaderStoreFactory()
  usePageHeaderStore.setOptions(options)
}