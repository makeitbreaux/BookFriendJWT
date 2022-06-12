\echo 'Delete and recreate bookfriend db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE bookfriend;
CREATE DATABASE bookfriend;
\connect bookfriend

\i bookfriend-schema.sql
\i bookfriend-seed.sql

\echo 'Delete and recreate bookfriend_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE bookfriend_test;
CREATE DATABASE bookfriend_test;
\connect bookfriend_test

\i bookfriend-schema.sql

