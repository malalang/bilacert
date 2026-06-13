export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          authorId: string | null
          authorName: string | null
          category: string | null
          content: string
          createdAt: string | null
          excerpt: string | null
          featured: boolean | null
          featuredImage: string | null
          id: string
          published: boolean | null
          publishedAt: string | null
          readTime: string | null
          seoDescription: string | null
          seoKeywords: string | null
          seoTitle: string | null
          slug: string
          tags: string | null
          thumbnail: string | null
          title: string
          updatedAt: string | null
          viewsCount: number | null
        }
        Insert: {
          authorId?: string | null
          authorName?: string | null
          category?: string | null
          content: string
          createdAt?: string | null
          excerpt?: string | null
          featured?: boolean | null
          featuredImage?: string | null
          id: string
          published?: boolean | null
          publishedAt?: string | null
          readTime?: string | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          slug: string
          tags?: string | null
          thumbnail?: string | null
          title: string
          updatedAt?: string | null
          viewsCount?: number | null
        }
        Update: {
          authorId?: string | null
          authorName?: string | null
          category?: string | null
          content?: string
          createdAt?: string | null
          excerpt?: string | null
          featured?: boolean | null
          featuredImage?: string | null
          id?: string
          published?: boolean | null
          publishedAt?: string | null
          readTime?: string | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          slug?: string
          tags?: string | null
          thumbnail?: string | null
          title?: string
          updatedAt?: string | null
          viewsCount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["authorId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          email: string
          id: string
          message: string | null
          name: string | null
          phone: string | null
          service: string | null
          submittedAt: string
        }
        Insert: {
          email: string
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          submittedAt?: string
        }
        Update: {
          email?: string
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          submittedAt?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          assignedTo: string | null
          company: string | null
          completedAt: string | null
          createdAt: string | null
          details: Json | null
          email: string
          formType: string
          fullName: string
          id: string
          industry: string | null
          internalNotes: string | null
          phone: string | null
          serviceId: string | null
          serviceName: string | null
          status: string
          updatedAt: string | null
        }
        Insert: {
          assignedTo?: string | null
          company?: string | null
          completedAt?: string | null
          createdAt?: string | null
          details?: Json | null
          email: string
          formType: string
          fullName: string
          id?: string
          industry?: string | null
          internalNotes?: string | null
          phone?: string | null
          serviceId?: string | null
          serviceName?: string | null
          status?: string
          updatedAt?: string | null
        }
        Update: {
          assignedTo?: string | null
          company?: string | null
          completedAt?: string | null
          createdAt?: string | null
          details?: Json | null
          email?: string
          formType?: string
          fullName?: string
          id?: string
          industry?: string | null
          internalNotes?: string | null
          phone?: string | null
          serviceId?: string | null
          serviceName?: string | null
          status?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_assigned_to_fkey"
            columns: ["assignedTo"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          category: string | null
          content: string | null
          createdAt: string | null
          description: string | null
          featured: boolean | null
          features: string[] | null
          href: string
          icon: string | null
          id: string
          image: string | null
          includes: string[] | null
          orderIndex: number | null
          pricing: number | null
          pricingPlans: Json | null
          processingTime: string | null
          processSteps: Json | null
          published: boolean | null
          requirements: string[] | null
          seoDescription: string | null
          seoKeywords: string | null
          seoTitle: string | null
          shortDescription: string | null
          slug: string
          successStory: Json | null
          thumbnail: string | null
          title: string
          updatedAt: string | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          createdAt?: string | null
          description?: string | null
          featured?: boolean | null
          features?: string[] | null
          href: string
          icon?: string | null
          id?: string
          image?: string | null
          includes?: string[] | null
          orderIndex?: number | null
          pricing?: number | null
          pricingPlans?: Json | null
          processingTime?: string | null
          processSteps?: Json | null
          published?: boolean | null
          requirements?: string[] | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          shortDescription?: string | null
          slug: string
          successStory?: Json | null
          thumbnail?: string | null
          title: string
          updatedAt?: string | null
        }
        Update: {
          category?: string | null
          content?: string | null
          createdAt?: string | null
          description?: string | null
          featured?: boolean | null
          features?: string[] | null
          href?: string
          icon?: string | null
          id?: string
          image?: string | null
          includes?: string[] | null
          orderIndex?: number | null
          pricing?: number | null
          pricingPlans?: Json | null
          processingTime?: string | null
          processSteps?: Json | null
          published?: boolean | null
          requirements?: string[] | null
          seoDescription?: string | null
          seoKeywords?: string | null
          seoTitle?: string | null
          shortDescription?: string | null
          slug?: string
          successStory?: Json | null
          thumbnail?: string | null
          title?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          createdAt: string | null
          id: string
          postUrl: string
        }
        Insert: {
          createdAt?: string | null
          id?: string
          postUrl: string
        }
        Update: {
          createdAt?: string | null
          id?: string
          postUrl?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          bio: string | null
          company: string | null
          createdAt: string | null
          createdBy: string | null
          email: string
          firstName: string | null
          id: string
          isActive: boolean | null
          lastName: string | null
          phone: string | null
          profileImage: string | null
          role: string
          updatedAt: string | null
          updatedBy: string | null
        }
        Insert: {
          bio?: string | null
          company?: string | null
          createdAt?: string | null
          createdBy?: string | null
          email: string
          firstName?: string | null
          id: string
          isActive?: boolean | null
          lastName?: string | null
          phone?: string | null
          profileImage?: string | null
          role?: string
          updatedAt?: string | null
          updatedBy?: string | null
        }
        Update: {
          bio?: string | null
          company?: string | null
          createdAt?: string | null
          createdBy?: string | null
          email?: string
          firstName?: string | null
          id?: string
          isActive?: boolean | null
          lastName?: string | null
          phone?: string | null
          profileImage?: string | null
          role?: string
          updatedAt?: string | null
          updatedBy?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_created_by_fkey"
            columns: ["createdBy"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_updated_by_fkey"
            columns: ["updatedBy"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_views: { Args: { post_slug: string }; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
