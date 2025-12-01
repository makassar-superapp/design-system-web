import { toast } from '@/components/ui/toast'

export function showToast(
  title: string,
  description: string,
  variant: 'default' | 'success' | 'destructive' | 'primary' = 'success'
) {
  toast({
    title: title,
    description: description,
    variant: variant,
  })
}
