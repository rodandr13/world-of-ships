import type { AppDispatch } from '@/app/redux/store';
import { useDispatch } from 'react-redux';

export const useTypedDispatch = () => useDispatch<AppDispatch>();