import toast from 'react-hot-toast';
export default async function handleLoadingAndToast(
  promise,
  loadingMessage,
  successMessage,
  errorMessage,
  setLoading,
) {
  setLoading(true);
  const toastId = toast.loading(loadingMessage);
  try {
    const result = await promise;
    toast.success(successMessage);
    return result;
  } catch (error) {
    toast.error(errorMessage);
    throw error;
  } finally {
    toast.dismiss(toastId);
    setLoading(false);
  }
}
