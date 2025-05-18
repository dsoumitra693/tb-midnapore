import { useEffect, useState } from 'react';
import { Trip } from '@/types';
import { fetchTrips } from './getTrips';

export const useTrips = ({
    offset = 0,
    limit = 10000,
    searchText = ''
}: {
    offset?: number;
    limit?: number;
    searchText?: string;
}) => {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getTrips = async () => {
            try {
                setLoading(true);
                const trips = await fetchTrips({
                    offset,
                    limit,
                    searchText
                });
                setTrips(trips);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to fetch trips');
            } finally {
                setLoading(false);
            }
        };
        getTrips();
    }, []);

    return { trips, loading, error};
};