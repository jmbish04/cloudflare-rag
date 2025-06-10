CREATE TABLE email_threads (
  thread_id TEXT PRIMARY KEY,
  thread_url TEXT,
  pdf_url TEXT,
  num_messages INTEGER,
  num_attachments INTEGER,
  attachments_json TEXT,
  parties TEXT,
  subject TEXT,
  date_first_message TIMESTAMP,
  date_last_message TIMESTAMP,
  tags TEXT,
  main_topic TEXT,
  message_summaries_json TEXT,
  rag_key TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE email_docs (
  doc_id TEXT PRIMARY KEY,
  source TEXT,
  parent_id TEXT,
  drive_url TEXT,
  r2_file_url TEXT,
  parent_folder_id TEXT,
  pdf_url TEXT,
  title TEXT,
  type TEXT,
  tags TEXT,
  main_topic TEXT,
  related_thread_id TEXT,
  description TEXT,
  gemini_summary TEXT,
  gemini_topics TEXT,
  date_uploaded TIMESTAMP,
  uploaded_by TEXT,
  file_size_bytes INTEGER,
  mime_type TEXT,
  rag_key TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat_sessions (
  session_id TEXT PRIMARY KEY,
  main_topic TEXT,
  user_prompt TEXT,
  vector_results_json TEXT,
  r2_output_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
