import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const documents = sqliteTable('documents', {
  id: text('id').primaryKey(),
  name: text('name'),
  textContent: text('text_content'),
  size: integer('size'),
  sessionId: text('session_id'),
  r2Url: text('r2_url'),
});

export const documentChunks = sqliteTable('document_chunks', {
  id: text('id').primaryKey(),
  documentId: text('document_id').references(() => documents.id),
  text: text('text'),
  sessionId: text('session_id'),
});

export const emailThreads = sqliteTable('email_threads', {
  threadId: text('thread_id').primaryKey(),
  threadUrl: text('thread_url'),
  pdfUrl: text('pdf_url'),
  numMessages: integer('num_messages'),
  numAttachments: integer('num_attachments'),
  attachmentsJson: text('attachments_json'),
  parties: text('parties'),
  subject: text('subject'),
  dateFirstMessage: text('date_first_message'),
  dateLastMessage: text('date_last_message'),
  tags: text('tags'),
  mainTopic: text('main_topic'),
  messageSummariesJson: text('message_summaries_json'),
  ragKey: text('rag_key'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  lastUpdated: text('last_updated').default(sql`CURRENT_TIMESTAMP`),
});

export const emailDocs = sqliteTable('email_docs', {
  docId: text('doc_id').primaryKey(),
  source: text('source'),
  parentId: text('parent_id'),
  driveUrl: text('drive_url'),
  r2FileUrl: text('r2_file_url'),
  parentFolderId: text('parent_folder_id'),
  pdfUrl: text('pdf_url'),
  title: text('title'),
  type: text('type'),
  tags: text('tags'),
  mainTopic: text('main_topic'),
  relatedThreadId: text('related_thread_id'),
  description: text('description'),
  geminiSummary: text('gemini_summary'),
  geminiTopics: text('gemini_topics'),
  dateUploaded: text('date_uploaded'),
  uploadedBy: text('uploaded_by'),
  fileSizeBytes: integer('file_size_bytes'),
  mimeType: text('mime_type'),
  ragKey: text('rag_key'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  lastUpdated: text('last_updated').default(sql`CURRENT_TIMESTAMP`),
});

export const chatSessions = sqliteTable('chat_sessions', {
  sessionId: text('session_id').primaryKey(),
  mainTopic: text('main_topic'),
  userPrompt: text('user_prompt'),
  vectorResultsJson: text('vector_results_json'),
  r2OutputUrl: text('r2_output_url'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});