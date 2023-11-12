type CONFIG = {
    BUILDER_IO_API_KEY: string;
};

const local: CONFIG = {
    BUILDER_IO_API_KEY: process.env.NEXT_PUBLIC_BUILDER_IO_API_KEY || '',
};

const isProduction = process.env.NODE_ENV === 'production';

const config: CONFIG = isProduction ? { BUILDER_IO_API_KEY: '' } : local;

export default config;
