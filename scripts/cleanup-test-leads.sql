DELETE FROM Lead
WHERE name IN ('Test Prospect', 'Verify Prospect', 'Verify Lead', 'Thabo Mokoena')
   OR email IN ('test@example.com', 'verify@example.com');
SELECT COUNT(*) AS remaining_leads FROM Lead;
