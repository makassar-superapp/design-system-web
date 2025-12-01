import { toast } from 'vue-sonner'

/**
 * Menampilkan toast success dengan vue-sonner
 */
export function showSuccess(
  message: string,
  description?: string,
  action?: {
    label: string
    onClick: () => void
  }
) {
  return toast.success(message, {
    description,
    duration: 4000,
    dismissible: true,
    closeButton: true,
    action,
  })
}

/**
 * Menampilkan toast error dengan vue-sonner
 */
export function showErrorToast(
  message: string,
  description?: string,
  action?: {
    label: string
    onClick: () => void
  }
) {
  return toast.error(message, {
    description,
    duration: 5000,
    dismissible: true,
    closeButton: true,
    action,
  })
}

/**
 * Menampilkan toast info dengan vue-sonner
 */
export function showInfo(
  message: string,
  description?: string,
  action?: {
    label: string
    onClick: () => void
  }
) {
  return toast.info(message, {
    description,
    duration: 4000,
    dismissible: true,
    closeButton: true,
    action,
  })
}

/**
 * Menampilkan toast warning dengan vue-sonner
 */
export function showWarning(
  message: string,
  description?: string,
  action?: {
    label: string
    onClick: () => void
  }
) {
  return toast.warning(message, {
    description,
    duration: 4000,
    dismissible: true,
    closeButton: true,
    action,
  })
}

/**
 * Menampilkan toast loading dengan vue-sonner
 */
export function showLoading(
  message: string,
  description?: string
) {
  return toast.loading(message, {
    description,
    dismissible: true,
    closeButton: true,
  })
}

/**
 * Menutup toast berdasarkan ID
 */
export function closeToast(toastId: string | number) {
  return toast.dismiss(toastId)
}

/**
 * Menutup semua toast
 */
export function closeAllToasts() {
  return toast.dismiss()
}

/**
 * Menampilkan toast promise dengan vue-sonner
 * @param promise - Promise yang akan dijalankan
 * @param messages - Pesan untuk setiap state
 */
export function showPromise<T>(
  promise: Promise<T>,
  messages: {
    loading: string
    success: string | ((data: T) => string)
    error: string | ((error: any) => string)
  }
) {
  return toast.promise(promise, messages)
}