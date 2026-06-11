export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.1";
  };
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string | null;
          author_name: string | null;
          category: string | null;
          content: string;
          created_at: string | null;
          excerpt: string | null;
          featured: boolean | null;
          featured_image: string | null;
          id: string;
          published: boolean | null;
          published_at: string | null;
          read_time: string | null;
          seo_description: string | null;
          seo_keywords: string | null;
          seo_title: string | null;
          slug: string;
          tags: string | null;
          thumbnail: string | null;
          title: string;
          updated_at: string | null;
          views_count: number | null;
        };
        Insert: {
          author_id?: string | null;
          author_name?: string | null;
          category?: string | null;
          content: string;
          created_at?: string | null;
          excerpt?: string | null;
          featured?: boolean | null;
          featured_image?: string | null;
          id: string;
          published?: boolean | null;
          published_at?: string | null;
          read_time?: string | null;
          seo_description?: string | null;
          seo_keywords?: string | null;
          seo_title?: string | null;
          slug: string;
          tags?: string | null;
          thumbnail?: string | null;
          title: string;
          updated_at?: string | null;
          views_count?: number | null;
        };
        Update: {
          author_id?: string | null;
          author_name?: string | null;
          category?: string | null;
          content?: string;
          created_at?: string | null;
          excerpt?: string | null;
          featured?: boolean | null;
          featured_image?: string | null;
          id?: string;
          published?: boolean | null;
          published_at?: string | null;
          read_time?: string | null;
          seo_description?: string | null;
          seo_keywords?: string | null;
          seo_title?: string | null;
          slug?: string;
          tags?: string | null;
          thumbnail?: string | null;
          title?: string;
          updated_at?: string | null;
          views_count?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey";
            columns: ["author_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      contacts: {
        Row: {
          email: string;
          id: string;
          message: string | null;
          name: string | null;
          phone: string | null;
          service: string | null;
          submitted_at: string;
        };
        Insert: {
          email: string;
          id?: string;
          message?: string | null;
          name?: string | null;
          phone?: string | null;
          service?: string | null;
          submitted_at?: string;
        };
        Update: {
          email?: string;
          id?: string;
          message?: string | null;
          name?: string | null;
          phone?: string | null;
          service?: string | null;
          submitted_at?: string;
        };
        Relationships: [];
      };
      form_submissions: {
        Row: {
          assigned_to: string | null;
          company: string | null;
          completed_at: string | null;
          created_at: string | null;
          details: Json | null;
          email: string;
          form_type: string;
          full_name: string;
          id: string;
          industry: string | null;
          internal_notes: string | null;
          phone: string | null;
          service_id: string | null;
          service_name: string | null;
          status: string;
          updated_at: string | null;
        };
        Insert: {
          assigned_to?: string | null;
          company?: string | null;
          completed_at?: string | null;
          created_at?: string | null;
          details?: Json | null;
          email: string;
          form_type: string;
          full_name: string;
          id?: string;
          industry?: string | null;
          internal_notes?: string | null;
          phone?: string | null;
          service_id?: string | null;
          service_name?: string | null;
          status?: string;
          updated_at?: string | null;
        };
        Update: {
          assigned_to?: string | null;
          company?: string | null;
          completed_at?: string | null;
          created_at?: string | null;
          details?: Json | null;
          email?: string;
          form_type?: string;
          full_name?: string;
          id?: string;
          industry?: string | null;
          internal_notes?: string | null;
          phone?: string | null;
          service_id?: string | null;
          service_name?: string | null;
          status?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "form_submissions_assigned_to_fkey";
            columns: ["assigned_to"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      services: {
        Row: {
          category: string | null;
          content: string | null;
          created_at: string | null;
          description: string | null;
          featured: boolean | null;
          features: string[] | null;
          href: string;
          icon: string | null;
          id: string;
          image: string | null;
          includes: string[] | null;
          order_index: number | null;
          pricing: number | null;
          pricing_plans: Json | null;
          process_steps: Json | null;
          processing_time: string | null;
          published: boolean | null;
          requirements: string[] | null;
          seo_description: string | null;
          seo_keywords: string | null;
          seo_title: string | null;
          short_description: string | null;
          slug: string;
          success_story: Json | null;
          thumbnail: string | null;
          title: string;
          updated_at: string | null;
        };
        Insert: {
          category?: string | null;
          content?: string | null;
          created_at?: string | null;
          description?: string | null;
          featured?: boolean | null;
          features?: string[] | null;
          href: string;
          icon?: string | null;
          id?: string;
          image?: string | null;
          includes?: string[] | null;
          order_index?: number | null;
          pricing?: number | null;
          pricing_plans?: Json | null;
          process_steps?: Json | null;
          processing_time?: string | null;
          published?: boolean | null;
          requirements?: string[] | null;
          seo_description?: string | null;
          seo_keywords?: string | null;
          seo_title?: string | null;
          short_description?: string | null;
          slug: string;
          success_story?: Json | null;
          thumbnail?: string | null;
          title: string;
          updated_at?: string | null;
        };
        Update: {
          category?: string | null;
          content?: string | null;
          created_at?: string | null;
          description?: string | null;
          featured?: boolean | null;
          features?: string[] | null;
          href?: string;
          icon?: string | null;
          id?: string;
          image?: string | null;
          includes?: string[] | null;
          order_index?: number | null;
          pricing?: number | null;
          pricing_plans?: Json | null;
          process_steps?: Json | null;
          processing_time?: string | null;
          published?: boolean | null;
          requirements?: string[] | null;
          seo_description?: string | null;
          seo_keywords?: string | null;
          seo_title?: string | null;
          short_description?: string | null;
          slug?: string;
          success_story?: Json | null;
          thumbnail?: string | null;
          title?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      testimonials: {
        Row: {
          created_at: string | null;
          id: string;
          post_url: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          post_url: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          post_url?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          bio: string | null;
          company: string | null;
          created_at: string | null;
          created_by: string | null;
          email: string;
          first_name: string | null;
          id: string;
          is_active: boolean | null;
          last_name: string | null;
          phone: string | null;
          profile_image: string | null;
          role: string;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          bio?: string | null;
          company?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          email: string;
          first_name?: string | null;
          id: string;
          is_active?: boolean | null;
          last_name?: string | null;
          phone?: string | null;
          profile_image?: string | null;
          role?: string;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          bio?: string | null;
          company?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          email?: string;
          first_name?: string | null;
          id?: string;
          is_active?: boolean | null;
          last_name?: string | null;
          phone?: string | null;
          profile_image?: string | null;
          role?: string;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_updated_by_fkey";
            columns: ["updated_by"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      increment_views: {
        Args: { post_slug: string };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
